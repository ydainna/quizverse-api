export class Constants {
  // Minimum number of characters for the pseudo
  static readonly MIN_CHAR_PSEUDO: number = 3;

  // Maximum number of characters for the pseudo
  static readonly MAX_CHAR_PSEUDO: number = 20;

  // Minimum score -> 0
  static readonly MIN_SCORE: number = 0;

  // Maximum score -> 10
  static readonly MAX_SCORE: number = 10;

  // Path images
  static readonly PATH_IMAGES: string = "public/images/";

  // Path lottie
  static readonly PATH_LOTTIE: string = "public/lottie/";

  // Home route
  static readonly HOME_ROUTE_MESSAGE: string = '<img src="images/elephant.svg" alt="home" width="100%" height="100%">';

  // Message for the error route
  static readonly ERROR_ROUTE_MESSAGE: string =
    "Toutes les routes mènent à Rome apparemment... mais cela n'a pas l'air d'être le cas de celle-ci... 🐘";
}
