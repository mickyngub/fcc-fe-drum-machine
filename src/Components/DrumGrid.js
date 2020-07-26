import React from "react";
import Grid from "@material-ui/core/Grid";

const DrumGrid = () => {
  return (
    <div>
      Hello
      <Grid container spacing={3}>
        <Grid item xs>
          yo
        </Grid>
        <Grid item xs>
          yo
        </Grid>
        <Grid item xs>
          yo
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs>
          sup
        </Grid>
        <Grid item xs>
          sup
        </Grid>
        <Grid item xs>
          sup
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs>
          hey
        </Grid>
        <Grid item xs>
          hey
        </Grid>
        <Grid item xs>
          hey
        </Grid>
      </Grid>
    </div>
  );
};

export default DrumGrid;
