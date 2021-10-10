import React from 'react';
import { withStyles} from '@material-ui/core'
import Button from '@material-ui/core/Button';

export const Review = ({ formData, setForm, navigation }) => {
    const [clicked, setClicked] = React.useState(false);
  const handleClick = () => {
    setClicked(!clicked);
    console.log(clicked);
  };
    const ColorButton = withStyles((theme) => ({
        root: {
          fontSize: 16,
          color: "#F05A28",
          borderColor: "#F05A28",
          font: "Open Sans",
          fontWeight: 700,
          width: 200,
          height: 50,
          border: '2px solid',
          borderRadius: 10,
          position: 'fixed',
            bottom: '0',
            right:'0',
            marginRight: "2rem",
            marginBottom: "3rem",
        },
      }))(Button);
    return (
        <div>
            <h1>Review test</h1>
            <ColorButton onClick={navigation.next}>Sign Up</ColorButton>
        </div>
    )
}