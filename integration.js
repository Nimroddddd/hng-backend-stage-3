const integrationSettings = {
  "data": {
    "date": {
      "created_at": "2025-02-18",
      "updated_at": "2025-02-18"
    },
    "descriptions": {
      "app_description": "An integration that shows updatets on memcoin prices",
      "app_logo": "https://imgur.com/a/oAAI53s",
      "app_name": "Memecoin trend",
      "app_url": "https://hng-backend-stage-3.onrender.com",
      "background_color": "#fff"
    },
    "integration_category": "Data Analytics & Visualization",
    "integration_type": "interval",
    "is_active": true,
    "output": [
      {
        "label": "output_channel_1",
        "value": true
      },
      {
        "label": "output_channel_2",
        "value": false
      }
    ],
    "key_features": [
      "Feature description 1.",
      "Feature description 2.",
      "Feature description 3.",
      "Feature description 4."
    ],
    "permissions": {
      "monitoring_user": {
        "always_online": true,
        "display_name": "Performance Monitor"
      }
    },
    "settings": [
      {
        "label": "interval",
        "type": "text",
        "required": true,
        "default": "* * * * *"
      },
      {
        "label": "Key",
        "type": "text",
        "required": true,
        "default": "1234567890"
      },
      {
        "label": "Do you want to continue",
        "type": "checkbox",
        "required": true,
        "default": "Yes"
      },
      {
        "label": "Provide Speed",
        "type": "number",
        "required": true,
        "default": "1000"
      },
      {
        "label": "Sensitivity Level",
        "type": "dropdown",
        "required": true,
        "default": "Low",
        "options": ["High", "Low"]
      },
      {
        "label": "Alert Admin",
        "type": "multi-checkbox",
        "required": true,
        "default": "Super-Admin",
        "options": ["Super-Admin", "Admin", "Manager", "Developer"]
      }
    ],
    "tick_url": "https://hng-backend-stage-3.onrender.com/tick"
  }
}

export default integrationSettings;