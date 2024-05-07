function RickRolled() {

  const address = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"

  return (
      <div>
        <h1>
          Nie dość, że to był szemrany link, który mógł robić dziwne rzeczy, to jeszcze haker dostałby dane logowania!
        </h1>
        <iframe src={address}
                title="Rick Rolled"
                sandbox
                loading="eager"
                allow="autoplay"></iframe>
      </div>
  );
}

export default RickRolled;