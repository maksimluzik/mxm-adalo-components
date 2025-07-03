import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const RadarChart = ({ data }) => {
  const chartHtml = `
    <html>
      <head>
        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
      </head>
      <body>
        <canvas id="myChart" width="300" height="300"></canvas>
        <script>
          const ctx = document.getElementById('myChart').getContext('2d');
          new Chart(ctx, {
            type: 'radar',
            data: ${JSON.stringify(data)},
            options: {
              responsive: false,
              maintainAspectRatio: false,
              plugins: {
                legend: { display: false }
              }
            }
          });
        </script>
      </body>
    </html>
  `;

  const dummyData = {
	labels: ['Trait A', 'Trait B', 'Trait C'],
	datasets: [{
	  label: 'Profile',
	  data: [65, 59, 90],
	  backgroundColor: 'rgba(0, 191, 198, 0.2)',
	  borderColor: '#00BFC6',
	  borderWidth: 2
	}]
  };

  return (
    <View style={styles.wrapper}>
      <WebView
        originWhitelist={['*']}
        source={{ html: chartHtml }}
        style={{ width: 300, height: 300 }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        scrollEnabled={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default RadarChart;