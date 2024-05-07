import classes from "./rick-rolled.module.scss";

function RickRolled() {

  const address = "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?si=zot5uBVqB0_7cYqV?autoplay=1"

  return (
      <div>
        <h1>
          Nie dość, że to był szemrany link, który mógł robić dziwne rzeczy, to jeszcze haker dostałby dane logowania!
        </h1>
        <div className={classes.iframeContainer}>
          <iframe width="100%"
                  height="100%"
                  src={address}
                  title="YouTube video player"
                  allow="autoplay"
                  referrerPolicy="no-referrer"
                  sandbox
                  allowFullScreen>

          </iframe>
        </div>
      </div>
  );
}

export default RickRolled;