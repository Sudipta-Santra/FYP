const STORE_KEY = "family_health_app";

export function getStore() {
  return (
    JSON.parse(localStorage.getItem(STORE_KEY)) || {
      members: [],
      emergencyContacts: [],
      records: [],
      prescriptions: [],
      medications: [],
    }
  );
}

export function saveStore(data) {
  localStorage.setItem(STORE_KEY, JSON.stringify(data));
}
