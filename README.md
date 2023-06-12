# Parking_availability _map


The goal of the **Parking_availability_map** project is to provide a convenient and user-friendly bicycle parking map application for **cycling enthusiasts, athletes, and individuals** who use bicycles as a mode of transportation in **Singapore**. The main functionality of this application is to allow users to **search for nearby bicycle parking spaces** and **filter them based on specific criteria**, ensuring a convenient and accessible travel experience.


## Challenges and different implementation options


During the development process, a challenging requirement was to select and maintain a map API that is **cost-effective** and **well-documented** for displaying parking spaces. Initially, we chose **Google Maps**, but we encountered limitations with the documentation and functionality of the **Google Maps React library**. Additionally, the pricing model based on clicks was not conducive to long-term maintenance. Therefore, we decided to use the more comprehensive documentation provided by **Leaflet.js** and the **Leaflet React library**. These libraries offer the advantage of providing high-quality maps and a seamless user experience, while also allowing API users to access them **permanently free of charge**.


Another challenging requirement is to request real-time data from the Singapore government API through cross-origin requests. There are two common methods for handling cross-origin requests: **1. JSONP** and **2. Proxy Server**. We initially tried JSONP, but it only supports GET requests, which is not suitable for complex requests that require longer parameters to obtain more precise data. Additionally, JSONP lacks privacy and is vulnerable to XSS attacks.

Considering these factors, we decided to switch to using **node.js (Express.js)** to build our own backend proxy server. This approach provides more flexibility in supporting various request types and offers higher user security. It also allows us to handle code processing on the backend and deliver the results to the frontend. Finally, we deployed the server on **Azure**.


## Functionality:

- **Nearby Bicycle Parking Spot Search**: Utilize the location feature to obtain the user's current position and display nearby bicycle parking spots on a map. Provide an intuitive map visualization and show relevant information about the bicycle parking spots, such as name, location, and number of available parking spaces.

- **Bicycle Parking Spot Filtering**: Offer filtering functionality, allowing users to refine the displayed bicycle parking spots based on specific requirements. For example, users can choose to show only covered parking spots or parking spots with a limited number of spaces.

- **User Address Localization**: Utilize the localization feature to retrieve the user's current address information and display it on the map. This enables users to have a clear understanding of their location and facilitates further interactions.

- **Search Address Display**: Enable users to input search addresses and display them on the map. This allows users to search for bicycle parking spots in locations other than just the nearby area.

- **Click on Map Markers**: When users click on the markers representing bicycle parking spots on the map, provide additional information about the specific parking spot. This information can include the detailed address, type of parking spot, availability status, and whether it is covered.

## React Redux
React Redux is used in the provided code to manage the application state of bicycle parking lots filter. It includes action creators (filter and clear), a reducer (locationReducer), and a store configuration using configureStore. The store is exported as the default export. React Redux enables components to dispatch actions and access the state from the store.

# Screenshots


![Alt text](https://github.com/technical-zebra/parking_availbility_map/blob/main/Screenshots/search.png "image demo")
Nearby Bicycle Parking Spot Search


![Alt text](https://github.com/technical-zebra/parking_availbility_map/blob/main/Screenshots/filter.png "image demo")
Bicycle Parking Spot Filtering


![Alt text](https://github.com/technical-zebra/parking_availbility_map/blob/main/Screenshots/geolocation.png "image demo")
User Address Localization


# Running the project


## on Github Page


## on Local
Cloned repository 


and run ``npm start run``
