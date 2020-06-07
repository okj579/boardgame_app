import React from 'react';
import { createStyles, withStyles, WithStyles, Theme } from '@material-ui/core/styles';
import i18n from '../../i18n';
import { Box, IconButton } from '@material-ui/core';
import { Send as SendIcon } from '@material-ui/icons';
import TextField from '@material-ui/core/TextField';
import { STYLES } from '../../theme';

const styles = (theme: Theme) => createStyles({
    root: {
        ...STYLES.flexCenter
    }
});

type WordHintInputProps = {
    submitHint: (hint: string)=>void;
    label?: string;
    defaultValue?: string;
}&WithStyles<typeof styles>;
type WordHintInputState = {
    value: string;
};

class WordHintInput extends React.Component<WordHintInputProps,WordHintInputState> {

    constructor(props: WordHintInputProps) {
    	super(props);
        this.state = {value: props.defaultValue || ''};

        this.handleChange = this.handleChange.bind(this);
        this.submitHint = this.submitHint.bind(this);
        this.keyPressed = this.keyPressed.bind(this);
    }

    handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({value: event.target.value});
    }

    submitHint() {
    	this.props.submitHint(this.state.value)
    	this.setState({value: ''});
    }

    keyPressed(event: React.KeyboardEvent<HTMLInputElement>) {
    	if (event.key === "Enter") {
    	    this.submitHint()
    	}
    }

    render() {
        const { label, classes } = this.props;
        const { value } = this.state;

        // TODO ml calc based on label

        return (
	        <Box width={1} ml={label ? 5 : 7} mr={2} className={classes.root}>
	        	<TextField label={label || i18n.t('GAME.COMMON.ENTER_HINT', 'Hinweis eingeben')}
                    fullWidth
	        		value={value}
	        		onChange={this.handleChange} 
	        		onKeyPress={this.keyPressed} />
    			<IconButton color="primary"
    				disabled={!value} 
    				onClick={this.submitHint}>
                    <SendIcon />
                </IconButton>
	        </Box>
        );
    }

}

export default withStyles(styles)(WordHintInput);