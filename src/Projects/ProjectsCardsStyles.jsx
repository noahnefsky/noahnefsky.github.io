import { makeStyles } from '@material-ui/styles';

const ProjectsCardStyles = makeStyles((theme) => ({
	root: {
		padding: '10px',
		color: "#000000",
		"&:hover": {
			transition: "0.3s",
			backgroundColor: "#0644A3",
			color: "white"
		},
		border:'1px solid #0644A3',
	},
	linkContainer: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center"
	},
	linkSpacing: {
		display: "inline-block",
		textAlign: "center",
	},
	linkTextBlack: {
		transition: "0.3s",
		fontSize: "0.85rem",
		color: "#0644A3",
		"&:hover": {
			transition: "0.3s",
			color: "#b5befa",
		}
	},
	linkTextWhite: {
		transition: "0.3s",
		fontSize: "0.85rem",
		color: "#ffffff",
		"&:hover": {
			transition: "0.3s",
			color: "#b5befa",
		}
	}
}))

export default ProjectsCardStyles;