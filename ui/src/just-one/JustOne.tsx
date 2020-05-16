import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import {GameField} from './GameField';
import {GameLobby} from './GameLobby';
import {GameEndView} from './GameEndView';
import { IGame, GamePhase } from '../custom.d';

import { GAME_URL, SETTING_ID } from '../App';

const POLLING_INTERVAL = 2000;

type JustOneProps = {
  gameId?: string,
  setTheme?: (color: string)=>void
};
type JustOneState = {
  currentGame?: IGame,
  allGames?: IGame[]
};

export class JustOne extends React.Component<JustOneProps,JustOneState> {
  public currentUserId: string = localStorage.getItem(SETTING_ID) || '';
  allWords = [
    'Ananas',
    'Bauernhof',
    'Clown',
    'Dartscheibe',
    'Elefant',
    'Fussball',
  ];
  private _interval: any; // TODO

  constructor(props: JustOneProps) {
    super(props);

    this.createGame = this.createGame.bind(this);

    this.state = {};
  }

  componentDidMount() {
    if (this.props.gameId) {
      this.loadGame();

      this._interval = setInterval(this.loadGame.bind(this), POLLING_INTERVAL);
    } else {
      this.loadGames();

      this._interval = setInterval(this.loadGames.bind(this), POLLING_INTERVAL);
    }
  }

  componentWillUnmount() {
    clearInterval(this._interval);
  }

  loadGame() {
    let id = this.props.gameId;
    if (!id) return;

    fetch(`${GAME_URL}/${id}`)
      .then(res => res.json())
      .then((data) => {
        this.setState({
          currentGame: data.game
        });
      })
      .catch(console.log)
  }

  loadGames() {
    fetch(`${GAME_URL}/all`)
      .then(res => res.json())
      .then((data) => {
        let games = data.games;
        games = games.filter((game: IGame) => {
          return game.phase === 0 || (this.currentUserId && game.players.findIndex(p => p.id === this.currentUserId) > -1);
        });
        this.setState({
          allGames: games
        });
      })
      .catch(console.log)
  }

  createGame() {
    const game: IGame = createGame();

    fetch(`${GAME_URL}/add`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({game})
    }).then((data) => {
        console.log(data);
      })
      .catch(console.log)
  }

  render() {
    const currentGame: IGame|undefined = this.state.currentGame;

    let optionalContent: React.ReactElement;
    let gameList;
    if (currentGame) {
      if (currentGame.phase === GamePhase.Init) {
        optionalContent = <GameLobby game={currentGame} setTheme={this.props.setTheme}></GameLobby>
      } else if (currentGame.phase === GamePhase.End) {
        optionalContent = <GameEndView game={currentGame}></GameEndView>;
      } else {
        optionalContent = <GameField game={currentGame}></GameField>;
      }
    } else {
      if (this.state.allGames) gameList = this.state.allGames.map(game => (
        <Link key={game.id} to={`/${game.id}`}>{`Spiele ${game.id}`}</Link>
      ));
      optionalContent = <Button variant="contained" color="primary" onClick={this.createGame}>Neues Spiel</Button>;
    }

    return (
      <div className="Game-content">
        {optionalContent}
        {gameList}
      </div>
    );
  }
}

function createGame(): IGame {
    return {"id":"", "name": "", "words":[],"players":[],"host":"1","round":0,"phase":0,"hints":[],"correctWords":[],"wrongWords":[]};
}