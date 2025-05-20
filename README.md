# Spot the Difference Game 🎮

This is a JSON-configurable "Spot the Difference" game built with ReactJS as part of my internship task at Eklavya Games.

## 🔧 Features

- Load image config and difference spots from JSON
- Click to spot differences (highlighted visually)
- Score tracker
- Success message on completion
- Timer to track game duration
- Sound effects
- Responsive on all devices

## 📁 JSON Configuration

Located in `public/config.json`

```json
{
  "gameTitle": "Spot the Difference - Animals",
  "images": {
    "image1": "images/image1.jpg",
    "image2": "images/image2.jpg"
  },
  "differences": [
    { "x": 100, "y": 200, "width": 50, "height": 50 },
    ...
  ]
}
