interface IHeader {
  title: string;
  goBack?: () => void;
  leftIcon?: boolean;
  leftButtonPress?: () => void;
}
