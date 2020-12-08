import ReactGA from "react-ga";

export function trackAction(
  category: string,
  action: string,
  value?: number,
  nonInteraction?: boolean
) {
  ReactGA.event({
    category: category,
    action: action,
    value: value,
    nonInteraction: nonInteraction,
  });
}
