/* eslint-disable object-curly-newline */
import React from "react";
import Loadable from "react-loadable";

import Loader from "./Loader";

const LoadingBackground = () => <Loader />;

const Home = Loadable({
  loader: () => import("./Home"),
  loading: LoadingBackground,
});

const Cryptocurrency = Loadable({
  loader: () => import("./Cryptocurrency"),
  loading: LoadingBackground,
});

const CryptocurrencyDetails = Loadable({
  loader: () => import("./CryptocurrencyDetails"),
  loading: LoadingBackground,
});

const News = Loadable({
  loader: () => import("./News"),
  loading: LoadingBackground,
});

const Exchanges = Loadable({
  loader: () => import("./Exchanges"),
  loading: LoadingBackground,
});

const Login = Loadable({
  loader: () => import("./Login"),
  loading: LoadingBackground,
});

export { Home, Login, Cryptocurrency, CryptocurrencyDetails, News, Exchanges };
