import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../style.css";
import {
  Grid,
  Card,
  Button,
  CardContent,
  CardActions,
  Box,
} from "@mui/material";
import Loading from "../shared/components/Loading";
import { registerQuiz } from "../services/quizService";
import { VerticalStepper } from "./components/vertical-liner-stepper";
import { questions } from "./questions";
import Dialog from "@mui/material/Dialog";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ErrorIcon from '@mui/icons-material/Error';
import { answersQuestion } from "./answers";

const scenarioQuestions = questions;
const answersQuestionsScenario = answersQuestion;

export const Quiz = () => {
  const [answerQuestion, setAnswerQuestion] = useState([]);
  const [currentScenario, setCurrentScenario] = useState(0);
  const [percentAnswer, setPercentAnswer] = useState(0);

  const [isCreated, setIsCreated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [isErrorCreated, setIsErrorCreated] = useState(false);

  let isValid = answerQuestion.length >= 4;

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsCreated(false);
    setIsLoading(true);
    const result = validateAnswer();
    setPercentAnswer(result);

    setTimeout(() => {
      setIsCreated(true);
      setIsLoading(false);
    }, 2000);
  };

  const handleGetAnswer = (answer) => {
    setAnswerQuestion([...answer]);
  };

  const handleNextQuiz = () => {
    setAnswerQuestion([]);
    setCurrentScenario(currentScenario + 1);
    setIsLoading(false);
    handleIsCreated();
  };

  const handleIsCreated = () => {
    setIsCreated(false);
  };

  const handleIsError = () => {
    setIsErrorCreated(false);
  };

  const handleGoToHome = (event) => {
    event.preventDefault();
    navigate(`/home`);
  };

  const handleToHome = () => {
    navigate('/home');
  }

  const validateAnswer = () => {
    const scenarioAnswer = answersQuestionsScenario[currentScenario].answers;
    let correctAnswer = 0;
    console.log(scenarioAnswer);
    scenarioAnswer.forEach((result, index) => {
      console.log(answerQuestion)
      if (result.answer === answerQuestion[index].answer && result.id === answerQuestion[index].id ){
        correctAnswer +=1;
        console.log("aqui", correctAnswer)
      }
    });

    return correctAnswer * 100 / scenarioAnswer.length;
  }

  return (
    <>
      <div className="container">
        {!isLoading && (
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Card
                style={{
                  minWidth: 600,
                  maxWidth: 600,
                  height: "100%",
                  minHeight: "450px",
                  borderRadius: "20px",
                }}
              >
                <CardContent style={{ justifyContent: "center" }}>
                  <Box
                    component="form"
                    sx={{
                      "& > :not(style)": { m: 1, width: "100%" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <h1 className="text-title">
                      Quiz de {scenarioQuestions[currentScenario].scenario}
                    </h1>
                    <VerticalStepper
                      steps={scenarioQuestions[currentScenario].questions}
                      handleGetAnswer={handleGetAnswer}
                    />
                  </Box>
                </CardContent>
                <CardActions style={{ justifyContent: "center" }}>
                  <Button
                    variant="contained"
                    onClick={handleSubmit}
                    disabled={!isValid}
                  >
                    Enviar respuestas
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={handleToHome}
                  >
                    Cancelar
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        )}
        {isLoading && (
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Loading />
            </Grid>
          </Grid>
        )}
        <Dialog
          open={isCreated}
          keepMounted
          onClose={handleIsCreated}
          aria-describedby="alert-dialog-delete-cli"
          aria-labelledby="scroll-dialog-title"
        >
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: "50px",
              }}
            >
              <VerifiedUserIcon color="success" />
              &nbsp;
              <p>Porcentaje de acierto: {percentAnswer} % </p>
            </Grid>
            <Grid
              item
              xs={12}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingBottom: "30px",
              }}
            >
              <>
                {currentScenario + 1 < scenarioQuestions.length && (
                  <Button
                    variant="contained"
                    onClick={handleNextQuiz}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Siguiente quiz
                  </Button>
                )}
                <Button sx={{ mt: 1, mr: 1 }} onClick={handleGoToHome}>
                  Regresar al home
                </Button>
              </>
            </Grid>
          </Grid>
        </Dialog>
        <Dialog
          open={isErrorCreated}
          keepMounted
          onClose={handleIsError}
          aria-describedby="alert-dialog-delete-cli"
          aria-labelledby="scroll-dialog-title"
        >
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: "50px",
              }}
            >
              <ErrorIcon color="error" />
              &nbsp;
              <p>No pudimos validar tus respuestas en este instante, lo sentimos</p>
            </Grid>
            <Grid
              item
              xs={12}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingBottom: "30px",
              }}
            >
              <Button onClick={handleSubmit} sx={{ mt: 1, mr: 1 }}>Reintentar</Button>
              <Button
                variant="contained"
                onClick={handleIsError}
                sx={{ mt: 1, mr: 1 }}
              >
                Salir
              </Button>
            </Grid>
          </Grid>
        </Dialog>
      </div>
    </>
  );
};
