import React from 'react';
import i18n from '../../i18n';
import {IGame, IHint} from '../../types';
import WordCard from '../components/WordCard';
import WordHint from '../components/WordHint';
import GameField from './GameField';

import api from '../../shared/apiFunctions';
import {getPlayerInGame} from "../gameFunctions";
import {getCurrentUserInGame} from "../../shared/functions";
import {nextTutorialStep, TUTORIAL_HINTS} from "../tutorial";
import TutorialOverlay from "../../common/TutorialOverlay";
import {OneWordGameChildProps} from "../OneWordGame";
import {IconButton} from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import EndPhaseButton from "../components/EndPhaseButton";

type HintWritingViewProps = {
    game: IGame
}&OneWordGameChildProps;

type HintWritingViewState = {
    submittedHints: {[key: string]: { hint: string, reset?: boolean }},
};

class HintWritingView extends React.Component<HintWritingViewProps, HintWritingViewState> {
    public state: HintWritingViewState = { submittedHints: {} };
    private _isMounted: boolean = false;

    constructor(props: HintWritingViewProps) {
        super(props);

        this.submitHint = this.submitHint.bind(this);
        this.resetHint = this.resetHint.bind(this);
        this.forceEndPhase = this.forceEndPhase.bind(this);
    }

    componentDidMount() {
        this._isMounted = true;
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    async submitHint(hintId: string, hint: string) {
        this.setState((prevState) => {
            prevState.submittedHints[hintId] = {hint};
            return { submittedHints: prevState.submittedHints };
        });
        if (this.props.game.$isTutorial) { nextTutorialStep(hint); return; }
        await api.submitHint(this.props.game.id, hintId, hint);
    }

    async resetHint(hintId: string, hint: string) {
        this.setState((prevState) => {
            prevState.submittedHints[hintId] = {hint, reset: true};
            return { submittedHints: prevState.submittedHints };
        });
        await api.resetHint(this.props.game.id, hintId);
    }

    async forceEndPhase() {
        await api.endHintPhase(this.props.game.id);
    }

    render() {
        const game: IGame = this.props.game;
        const { submittedHints } = this.state;
        const currentRound = game.rounds[game.round];
        const currentUser = getCurrentUserInGame(game);
        const guesser = getPlayerInGame(game, currentRound.guesserId) || { name: '?', id: '?' };
        const isGuesser = currentUser && currentUser.id === guesser.id;
        const isGameHost: boolean = !!currentUser?.id && game.hostId === currentUser.id;
        let enteredHint: boolean = !!isGuesser;

        const currentWord = isGuesser || !currentUser ? '?' : (currentRound.word || '');
        const currentHints = currentRound.hints.map((hintObj: IHint) => {
            let hint: string = hintObj.hint;
            let defaultValue = '';
            const hintIsMine = currentUser && currentUser.id === hintObj.authorId;
            const author = getPlayerInGame(game, hintObj.authorId) || { name: '?', id: '?' };
            const authorName = hintIsMine ? i18n.t('COMMON.ME', 'Ich') : author.name;
            if (hintIsMine && submittedHints[hintObj.id]) {
                if (submittedHints[hintObj.id].reset) {
                    defaultValue = submittedHints[hintObj.id].hint;
                } else if (!hint) {
                    hint = submittedHints[hintObj.id].hint;
                }
            }
            if (!!hint) {
                if (hintIsMine) {
                    enteredHint = true;
                }
            }
            const showHint = !hint || hintIsMine;
            const showInput = !hint && hintIsMine;

            if (game.$isTutorial && hintIsMine) defaultValue = TUTORIAL_HINTS[currentRound.word][0];

            return (
                <WordHint 
                    key={hintObj.id}
                    hint={hint} 
                    color={author.color}
                    showPencil={!showInput && !hint}
                    submitHint={showInput ? (h) => this.submitHint(hintObj.id, h) : undefined}
                    showCheck={!showHint}
                    author={authorName}
                    defaultValue={defaultValue}
                >
                    {hintIsMine && !showInput && !game.$isTutorial && (
                        <IconButton color="primary" onClick={() => this.resetHint(hintObj.id, hint)}>
                            <EditIcon />
                        </IconButton>
                    )}
                </WordHint>
            );
        });

        return (
            <GameField
                leftCol={[
                    (<WordCard
                        word={currentWord} 
                        guesser={guesser}
                        isGuesser={isGuesser}
                        key="1" />),
                    (<EndPhaseButton
                        show={isGameHost && enteredHint && !game.isTwoPlayerVariant && !game.$isTutorial}
                        endPhase={() => this.forceEndPhase()}
                        actionRequiredFrom={game.actionRequiredFrom}
                        key="2"/>),
                    <TutorialOverlay game={game} key="tutorial" />
                ]}

                rightCol={currentHints}
            />
        );
    }
}

export default HintWritingView;
