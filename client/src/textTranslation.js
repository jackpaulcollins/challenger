 const textDisplay = (repType) =>{
  switch(repType){
    case "push_up":
      return "push ups";
    case "air_squat":
      return "air squats";
    case "bar_dip":
      return "bar dips";
    case "bench_dip":
      return "bench dips";
    case "chin_up":
      return "chin ups";
    case "pull_up":
      return "pull ups";
    case "handstand_push_up":
      return "handstand push ups";
    case "back_extension":
      return "back extensions";
    case "mountain_climber":
      return "mountain climbers";
    case "burpee":
      return "burpees";
    case "squat":
      return "squats";
  }
};

export default textDisplay;