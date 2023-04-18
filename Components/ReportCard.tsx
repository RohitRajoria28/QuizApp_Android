 

import React from "react";
import { useLocation } from "react-router-native";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement } from 'chart.js';
import { View, Text, StyleSheet } from 'react-native';

Chart.register(ArcElement);

const ReportCard = () => {
  let { state } = useLocation();
  console.log(state.state);
  
  const correctPercentage: string = ((state.state / 5) * 100).toFixed(2);
  const incorrectPercentage: string = ((100 - parseFloat(correctPercentage))).toFixed(2);

  const data = {
    labels: [`Correct (${correctPercentage}%)`, `Incorrect (${incorrectPercentage}%)`],
    datasets: [
      {
        data: [state.state, 5 - state.state],
        backgroundColor: ["#FF6384", "#36A2EB"],
        hoverBackgroundColor: ["#a862ea", "#ffb3ff"],
      },
    ],
  };

  return (
    <View style={styles.reportCardContainer}>
      <Text style={styles.reportCardHeader}>Your Quiz Result</Text>
      <Text>Blue is for correct: {(state.state/5)*100} %</Text>
      <Text>pink is for incorrect: {((5-state.state)/5)*100} %</Text>
      <View style={styles.pieContainer}>
        <Pie data={data}  />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  reportCardContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  reportCardHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  pieContainer: {
    height: 400,
    width: 400,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ReportCard;
