import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    container: { 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '40px',
        marginTop: '2vh'
    },
    chipFont: {
        fontWeight: '700'
    },
    title: {
		textAlign: "center",
		color: theme.palette.secondary.dark
	},
    background: {
        backgroundColor: "white",
        marginTop: '1.5vh',
    },
    cards:{
        paddingRight: "2%"
    },
    cardContainer: {
        backgroundColor: "white",
        border: "1px solid #0644A3",
        backgroundSize: '200%',
        transition: '0.6s',
        marginBottom: '25px',
        backgroundImage: 'linear-gradient(90deg, white, white, #0644A3)',
        '&:hover': {
            backgroundPosition: 'right',
        },
    },
    header: {
        fontSize: "115%",
        color: "#0644A3",
        fontWeight: "501"
    },
    body: {
        color: "#0644A3",
        fontSize: "85%"
    },
    icon: {
        color: "#0644A3",
        fontSize: "200%"
    },
}));

export const skills = [
    { type: "Python", level: 95 },
    { type: "C++", level:  95 },
    { type: "JavaScript", level: 90 },
    { type: "Dart", level: 85 },
    { type: "Java", level: 85 },
];

export const colors = {
    "title": {
        "text": "#fff",
        "background": "#2980b9"
    },
    "bar": {
        "hue": 201,
        "saturation": 70,
        "level": {
            "minimum": 50,
            "maximum": 90
        },
    },
};