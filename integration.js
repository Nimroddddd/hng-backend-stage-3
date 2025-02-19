const integrationSettings = {
  "data": {
    "date": {
      "created_at": "2025-02-28",
      "updated_at": "2025-02-18"
    },
    "descriptions": {
      "app_name": "Memecoin trend reminder",
      "app_description": "Sends updates on memecoin at regular intervals",
      "app_logo": "https://imgur.com/a/oAAI53s",
      "app_url": "https://6dmlhvnn-3000.uks1.devtunnels.ms",
      "background_color": "#fff"
    },
    "is_active": true,
    "integration_type": "interval",
    "key_features": [
      "shows coin prices"
    ],
    "author": "Amin",
    "settings": [
      {
        "label": "Time interval",
        "type": "text",
        "required": true,
        "default": "* * * * *"
      }
    ],
    "target_url": "https://6dmlhvnn-3000.uks1.devtunnels.ms/integration.json",
    "tick_url": "https://6dmlhvnn-3000.uks1.devtunnels.ms/tick"
  }
}

export default integrationSettings;