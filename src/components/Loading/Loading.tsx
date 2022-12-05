import LoadingStyled from "./LoadingStyled";

const Loading = (): JSX.Element => {
  return (
    <LoadingStyled>
      <span
        className="loader"
        aria-label="A spinning object that looks like an old movie reel"
      ></span>
    </LoadingStyled>
  );
};

export default Loading;
