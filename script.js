const ctx = document.getElementById('viagemChart').getContext('2d');

const data = {
  labels: ['Passagem de avião', 'Hospedagem', 'Alimentação', 'Transporte'],
  datasets: [{
    label: 'Valor Final (R$)',
    data: [1300, 1000, 500, 150],
    backgroundColor: [
      '#4C51BF',
      '#667EEA',
      '#7F9CF5',
      '#A3BFFA'
    ],
    borderColor: '#ffffff',
    borderWidth: 2
  }]
};

const config = {
  type: 'pie', // Pode alterar para 'bar' para exibir em barras
  data: data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Distribuição dos Gastos (Total: R$ 2.950,00)'
      }
    }
  },
};

new Chart(ctx, config);
