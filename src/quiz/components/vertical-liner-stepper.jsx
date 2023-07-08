import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { CheckboxList } from "./checkbox-list";

export const VerticalStepper = (props) => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [answers, setAnswers] = React.useState([]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    if(activeStep === props.steps.length-1){
      props.handleGetAnswer(answers);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setAnswers([]);
    props.handleGetAnswer([]);
  };

  const handleCheckAnswer = (id, answer) => {
    let newAnswers = [];

    if (answers.length >= 1) {
      newAnswers = handleUnCheckAnswer(id);
    }

    setAnswers([...newAnswers, { id, answer }]);
  };

  const handleUnCheckAnswer = (questionid) => {
    return answers.filter((answer) => answer.id !== questionid);
  };

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {props.steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === props.steps.length - 1 ? (
                  <Typography variant="caption">Ultima pregunta</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <CheckboxList
                options={step.options}
                questionId={step.id}
                handleCheckAnswer={handleCheckAnswer}
              ></CheckboxList>

              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={ handleNext }
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === props.steps.length - 1
                      ? "Finalizar"
                      : "Continuar"}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Regresar
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === props.steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Editar respuestas
          </Button>
        </Paper>
      )}
    </Box>
  );
};
