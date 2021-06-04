import React from "react";
import styled from "styled-components/native";
import { ScrollView } from "react-native";
import { PieChart } from "react-native-chart-kit";

import { SafeArea } from "../../../components/safearea";
import { StyledButton } from "../../../components/button";
import { Spacer } from "../../../components/spacer";

const Container = styled.View`
  flex: 1;
  align-items: center;
`;

const Title = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.l};
  font-family: ${(props) => props.theme.fonts.poppins};
`;

export function HomeScreen({ navigation }) {
  return (
    <>
      <SafeArea>
        <Container>
          <Spacer />
          <Title>portfolio</Title>
          <PieChart
            data={data}
            width={360}
            height={200}
            chartConfig={chartConfig}
            accessor={"population"}
            backgroundColor="rgba(255,255,255,0.5)"
            paddingLeft="16"
            center={[72, 0]}
            hasLegend={false}
          />
          <StyledButton
            onPress={() => navigation.navigate("Adding")}
            color="black"
            icon="plus"
            labelStyle={{ fontFamily: "Poppins_400Regular" }}
            uppercase={false}
          >
            add token
          </StyledButton>
        </Container>
      </SafeArea>
    </>
  );
}

const data = [
  {
    name: "Seoul",
    population: 21500000,
    color: "rgba(131, 167, 234, 1)",
    legendFontColor: "#7F7F7F",
    legendFontSize: 12,
  },
  {
    name: "Toronto",
    population: 2800000,
    color: "pink",
    legendFontColor: "#7F7F7F",
    legendFontSize: 12,
  },
  {
    name: "Beijing",
    population: 527612,
    color: "red",
    legendFontColor: "#7F7F7F",
    legendFontSize: 12,
  },
  {
    name: "New York",
    population: 8538000,
    color: "#fdfd96",
    legendFontColor: "#7F7F7F",
    legendFontSize: 12,
  },
  {
    name: "Moscow",
    population: 11920000,
    color: "green",
    legendFontColor: "#7F7F7F",
    legendFontSize: 12,
  },
];

const chartConfig = {
  backgroundColor: "#e26a00",
  backgroundGradientFrom: "#fb8c00",
  backgroundGradientTo: "#ffa726",
  decimalPlaces: 2, // optional, defaults to 2dp
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  style: {
    borderRadius: 16,
  },
  propsForDots: {
    r: "6",
    strokeWidth: "2",
    stroke: "#ffa726",
  },
};
