declare module "react-native-progress-steps" {
  import React, { Component } from "react";

  export class ProgressStep extends Component<ProgressStepProps> {}

  export class ProgressSteps extends Component<ProgressStepsProps> {}

  export interface StepIconProps {
    borderWidth?: number;
    borderStyle?: string;
    activeStepIconBorderColor?: string;

    progressBarColor?: string;
    completedProgressBarColor?: string;

    activeStepIconColor?: string;
    disabledStepIconColor?: string;
    completedStepIconColor?: string;

    labelFontFamily?: string;
    labelColor?: string;
    labelFontSize?: number;
    activeLabelColor?: string;
    activeLabelFontSize?: number;
    completedLabelColor?: string;

    activeStepNumColor?: string;
    completedStepNumColor?: string;
    disabledStepNumColor?: string;

    completedCheckColor?: string;
  }

  export interface ProgressStepProps {
    label?: string;
    onNext?: (activeStep?: number) => void;
    onPrevious?: (activeStep?: number) => void;
    onSubmit?: (activeStep?: number) => void;
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

  export interface ProgressStepsProps extends StepIconProps {
    isComplete?: boolean;
    activeStep?: number;
    topOffset?: number;
    marginBottom?: number;
  }
}
