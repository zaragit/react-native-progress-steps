declare module "react-native-progress-steps" {
  import React, { Component } from "react";

  export class ProgressStep extends Component<ProgressStepProps> {}

  export class ProgressSteps extends Component<ProgressStepsProps> {}

  export interface ProgressStepProps {
    label?: string;
    onNext?: () => void;
    onPrevious?: () => void;
    onSubmit?: () => void;
    setActiveStep?: (step?: number) => void;
    nextBtnText?: string;
    previousBtnText?: string;
    finishBtnText?: string;
    stepCount?: number;
    nextBtnStyle?: object;
    nextBtnTextStyle?: object;
    nextBtnDisabled?: boolean;
    previousBtnStyle?: object;
    previousBtnTextStyle?: object;
    previousBtnDisabled?: boolean;
    scrollViewProps?: object;
    viewProps?: object;
    errors?: boolean;
    removeBtnRow?: boolean;
    scrollable?: boolean;
  }

  export interface ProgressStepsProps {
    isComplete?: boolean;
    activeStep?: number;
    topOffset?: number;
    marginBottom?: number;
  }
}
