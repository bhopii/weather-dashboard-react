
import PageviewIcon from "@material-ui/icons/Pageview";
import { Grid } from "@material-ui/core";
import "./SearchBox.css";

const SearchBox = (props) => {
  return (
    <div className="srchBox">
      <Grid container direction="row" alignItems="center">
        <Grid item xs>
          <input type="text" name="cityName" value={props.cityName} onChange={props.handleChange}/>
        </Grid>
        <Grid item xs>
          <PageviewIcon style={{ fontSize: 40 }} onClick={props.handleSearch}/>
        </Grid>
      </Grid>
    </div>
  );
};

export default SearchBox;
