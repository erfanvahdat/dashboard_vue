import axios from 'axios';

async function getLiveTradeData() {
    const url = 'http://192.168.1.104:7000/api/v1/open-orders/';
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzI3ODI2OTMyLCJpYXQiOjE3Mjc4MDg5MzIsImp0aSI6ImMwYjYzNzdiMmQyMzQ2MDY4MTQ5Njk5OTMyMDE5Mjk0IiwidXNlcl9pZCI6NH0.Ewtsgst3CLWZlVz7mPcZKk0jhnMXa6yi7LQin7EOnMo';

    const headers = {
        'Authorization': `Token ${token}`,
        'Content-Type': 'application/json',
        // Optionally include User-Agent if necessary
        'User-Agent': 'Your User Agent Here'
    };

    try {
        const response = await axios.get(url, { headers: headers });

        // Log the full response to diagnose any issues
        console.log('Response Headers:', response.headers);
        console.log('Response Status:', response.status);

        // Check if the response is successful
        if (response.status !== 200) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Parse the JSON data
        const data = response.data;
        console.log('Live trade data:', data);

        // Print the type of orderId for each item in the response
        data.forEach(order => {
            console.log(`Order ID: ${order.orderId}, Type: ${typeof order.orderId}`);
        });

        return data;

    } catch (error) {
        console.error('Error fetching live trade data:', error);
    }
}

// Call the function
getLiveTradeData();
