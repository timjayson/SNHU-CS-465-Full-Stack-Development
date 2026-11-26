
const tripsEndpoint = 'http://localhost:3000/api/trips';

const options = {
    method: 'GET',
    headers: {
        'Accept': 'application/json'
    }
};

const travel = async (req, res) => {
    try {
        const response = await fetch(tripsEndpoint, options);

        if (!response.ok) {
            throw new Error(`API returned status ${response.status}`);
        }

        const trips = await response.json();

        if (!Array.isArray(trips)) {
            return res.status(500).send('Invalid trip data returned by API');
        }

        if (trips.length === 0) {
             return res.status(404).send('No trips available');
        }

        return res.render('travel', {
            title: 'Travlr Getaways',
            layout: false,
            trips: trips
        });
    } catch (err) {
        return res.status(500).send(err.message);
    }
};

module.exports = {
    travel
};
