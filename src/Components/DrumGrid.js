import React from "react";
import Grid from "@material-ui/core/Grid";

const DrumGrid = () => {
  return (
    <div>
      <Grid container spacing={3} style={{ marginTop: 20 }}>
        <Grid item xs style={{ backgroundColor: "steelblue", margin: 10 }}>
          yo
        </Grid>
        <Grid item xs style={{ backgroundColor: "steelblue", margin: 10 }}>
          yo
        </Grid>
        <Grid item xs style={{ backgroundColor: "steelblue", margin: 10 }}>
          yo
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs style={{ backgroundColor: "pink", margin: 10 }}>
          sup
        </Grid>
        <Grid item xs style={{ backgroundColor: "pink", margin: 10 }}>
          sup
        </Grid>
        <Grid item xs style={{ backgroundColor: "pink", margin: 10 }}>
          sup
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs style={{ backgroundColor: "yellow", margin: 10 }}>
          hey
        </Grid>
        <Grid item xs style={{ backgroundColor: "yellow", margin: 10 }}>
          hey
        </Grid>
        <Grid item xs style={{ backgroundColor: "yellow", margin: 10 }}>
          hey
        </Grid>
      </Grid>
    </div>
  );
};

export default DrumGrid;
