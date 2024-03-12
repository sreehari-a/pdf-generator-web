import React from "react";
import { Loader, LoaderContainer, LoadingText } from "./styled";

type AppLoaderProps = {
  loaderText?: string;
};

const AppLoader = ({ loaderText = "Loading" }: AppLoaderProps) => {
  return (
    <LoaderContainer>
      <Loader />
      <div>
        <LoadingText>{loaderText}</LoadingText>
      </div>
    </LoaderContainer>
  );
};

export default AppLoader;
