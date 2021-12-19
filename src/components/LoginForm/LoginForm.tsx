import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@material-ui/core"

type Props = {
    isFormOpen: boolean;
    handleClose: () => void;
}

export const LoginForm = ({ isFormOpen, handleClose } : Props) => {
    return (
        <Dialog open={isFormOpen} onClose={handleClose} aria-labelledby='form-dialog-title'>
            <DialogTitle id='form-dialog-title'>Log in</DialogTitle>
            <DialogContent>
                <DialogContentText>Log in to see more info</DialogContentText>
                <TextField 
                    autoFocus
                    margin='dense'
                    id='email'
                    type='email'
                    label='Email'
                    fullWidth
                />
                <TextField 
                    margin='dense'
                    id='pass'
                    type='password'
                    label='Password'
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button color='primary' onClick={handleClose}>Cancel</Button>
                <Button color='primary' onClick={handleClose}>Log in</Button>
            </DialogActions>
        </Dialog>
    )
}