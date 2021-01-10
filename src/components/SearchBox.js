import PageviewIcon from "@material-ui/icons/Pageview";
import { TextField, Grid } from "@material-ui/core";
import "./SearchBox.css";

const SearchBox = (props) => {
  return (
    <div className="srchBox">
      <Grid container direction="row" alignItems="center">
        <Grid item xs>
          <TextField variant="outlined" style={{ backgroundColor: "white" }} />
        </Grid>
        <Grid item xs>
          <PageviewIcon style={{ fontSize: 40 }} />
        </Grid>
      </Grid>
    </div>
  );
};

export default SearchBox;
