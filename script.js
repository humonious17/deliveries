document.addEventListener('DOMContentLoaded', function() {
    // Updating slider values display
    const codOrders = document.getElementById('codOrders');
    const rtoOrders = document.getElementById('rtoOrders');
    const codOrdersValue = document.getElementById('codOrdersValue');
    const rtoOrdersValue = document.getElementById('rtoOrdersValue');

    codOrders.addEventListener('input', function() {
        codOrdersValue.textContent = `${codOrders.value}%`;
    });

    rtoOrders.addEventListener('input', function() {
        rtoOrdersValue.textContent = `${rtoOrders.value}%`;
    });

    // Form submission handler
    document.getElementById('calculatorForm').addEventListener('submit', function(event) {
        event.preventDefault();

        // Get input values
        const landedCost = parseFloat(document.getElementById('landedCost').value);
        const sellingPrice = parseFloat(document.getElementById('sellingPrice').value);
        const codOrdersValue = parseFloat(codOrders.value) / 100; 
        const rtoOrdersValue = parseFloat(rtoOrders.value) / 100; 

        // Validate input values
        if (isNaN(landedCost) || isNaN(sellingPrice) || isNaN(codOrdersValue) || isNaN(rtoOrdersValue)) {
            alert('Please fill in all fields with valid numbers.');
            return;
        }

        // Calculate the percentage
        let percentage = 0;
        if (rtoOrdersValue !== 0) {
            percentage = ((codOrdersValue * sellingPrice) / (rtoOrdersValue * landedCost)) * 100;
        } else {
            alert('RTO Orders % cannot be 0.');
            return;
        }

        document.querySelector('#results .percentage').textContent = `${percentage.toFixed(2)}%`;
    });
});