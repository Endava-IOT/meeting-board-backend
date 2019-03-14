const { google } = require("googleapis");

export class GoogleAPIManager {
  static calendar: any;
  static auth: any;

  private static instance: GoogleAPIManager;

  private constructor() {}

  static async getInstance() {
    if (!GoogleAPIManager.instance) {
      GoogleAPIManager.instance = new GoogleAPIManager();
      this.auth = await google.auth.getClient({
        scopes: ["https://www.googleapis.com/auth/calendar"]
      });

      //Set calendar client
      this.calendar = google.calendar({ version: "v3", auth: this.auth });
    }

    return GoogleAPIManager.instance;
  }

  //Setup up GOOGLE Auth
  public async initialize() {}

  //Get all events of any calendar
  async getCalendarEvents() {
    const result = await GoogleAPIManager.calendar.events.list({
      //Change to the calendar ID needed
      calendarId: "cigvu3c84251qdbfsqk3i84nfc@group.calendar.google.com",
      timeMin: new Date().toISOString(),
      maxResults: 10,
      singleEvents: true,
      orderBy: "startTime"
    });

    return result.data.items;
  }
}
