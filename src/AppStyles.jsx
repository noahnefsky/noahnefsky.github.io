import { makeStyles } from '@material-ui/styles';

const AppStyles = makeStyles((theme) => ({
    iconButtonBorder: {
        margin: '8px',
		transition: "0.3s",
		borderRadius: "20%",
		color: "#0644A3",
		border: "1px solid #0644A3",
		'&:hover': {
			backgroundColor: "#0644A3",
			color: "white",
			transition: "0.3s"
        }
	},
	inline: {
		fontFamily: 'monospace'
	},
	iconButton: {
		width: "3vh",
		height: "auto",
	},
    headshot: {
        borderRadius: '50%',
        marginTop: '20px',
        display: 'block',
      },
    connectButton: {
        height: '6vh',
        width: '22vh',
        textTransform: 'Uppercase',
        fontWeight: '500',
		textDecoration: "none",
		borderRadius: 20,
		borderColor: "#FFFFFF",
		color: "#FFFFFF",
        backgroundColor: '#0644A3',
		fontSize: "15px",
		'&:hover': {
			backgroundColor: "#FFFFFF",
			color: "#0644A3",
			transition: "0.3s"
        }
    }
}))

export default AppStyles;