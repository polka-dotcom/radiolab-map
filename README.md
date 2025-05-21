# 🌍 Radiolab Interactive Map

An interactive, full-stack web map visualizing global locations featured in **Radiolab** episodes, powered by **Leaflet.js** and **OpenStreetMap**.

🔗 **Live Demo**: [https://polka-dotcom.github.io/radiolab-map/](https://polka-dotcom.github.io/radiolab-map/)  
🔗 **GitHub Repository**: [https://github.com/polka-dotcom/radiolab-map](https://github.com/polka-dotcom/radiolab-map)

---

## 📌 About the Project

This map provides a visual tour of real-world locations mentioned in **Radiolab** episodes. Users can:

- 📍 Zoom and explore interactive pins
- 🏷️ Filter locations by **type** (e.g., research facility, hospital)
- 📆 Filter by **year** mentioned (e.g., 2024, 2016, 2015, 2010)
- 🔗 Click a pin to read context and visit the linked Radiolab episode

### 🤖 Built With

- **Frontend**: HTML, CSS, JavaScript, [Leaflet.js](https://leafletjs.com/)
- **Backend**: Lightweight [Express.js](https://expressjs.com/) server
- **Map tiles**: [OpenStreetMap](https://www.openstreetmap.org/)
- **Data**: JSON-based custom schema for fast and flexible storage

---

## 🎥 Demo Walkthrough

<details>

![image](https://github.com/user-attachments/assets/f212b4ad-44ca-4c55-ae00-43d18acfa320)


### 🎯 Filters in Action
- Apply **one or both filters**: `Location Type` and `Year`

### 🔍 Example:

1. Filter by `Research Facility`
![image](https://github.com/user-attachments/assets/bf11c21d-6cb5-4d85-b01e-44298ff1cb42)

3. Filter by `Research Facility in 2016`
![image](https://github.com/user-attachments/assets/596d54c5-dd56-4eca-9ba6-b94ed08c35eb)

5. Click on a pin → view **description** and **link** to episode
![image](https://github.com/user-attachments/assets/5b591a61-3bd3-4e8a-99fa-63326c3ec101)

6. Link opens in new tab → **Radiolab podcast episode page**
![image](https://github.com/user-attachments/assets/484fd201-9fda-4cb7-a69f-93e33e7c0e09)

### 🧠 Notes:
- Locations may have **multiple types** (e.g., university + hospital)
- Locations may appear in **multiple years** (e.g., original airdate and reruns)
- If no matches, map will display **no pins**

</details>

---

## 💡 Inspiration

While listening to Radiolab, I once missed the chance to visit a quirky **elevator museum** in NYC because I didn't know it existed. That sparked the idea: _What if fans could explore Radiolab's stories by location?_

This map started as a personal passion project—a way to combine my love for tech, storytelling, and travel. From Ukraine to Nepal, Radiolab has painted vivid global pictures, and this tool brings them all together in one interactive space.

I hope it enhances how others experience Radiolab—by inspiring real-world journeys or just adding depth to a favorite episode.

---

## 🛠️ How It Works (Technical Overview)

- **Map UI** is rendered using Leaflet.js and styled with basic HTML/CSS.
- **Data is stored in JSON**, easy to edit or integrate with external systems.
- **Express.js** handles the backend routing and JSON file access.
- No external databases or heavy libraries—keeping it **light, fast, and portable**.

---

## 👩‍💻 Developed By

**Navya Grover**  
📍 CS Undergrad • Web Developer • Radiolab Fan  
🔗 [LinkedIn](www.linkedin.com/in/navya-gr) 
