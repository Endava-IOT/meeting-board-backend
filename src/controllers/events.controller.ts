import { JsonController, Get } from "routing-controllers";
import { GoogleAPIManager } from "../managers/calendar.manager";

@JsonController()
export class EventsController {
  private mockedResponse: string;

  @Get("/events/test")
  getMockedEvents() {
    this.mockedResponse = "";
    for (let i = 0; i < 10; i += 1) {
      const currentDate: Date = new Date();

      this.mockedResponse +=
        this.addHours(currentDate, i + 1).getTime() / 1000 +
        "* Reunion imporante|";
    }
    return this.mockedResponse;
  }

  private addHours(date: Date, hours: number): Date {
    date.setHours(date.getHours() + hours);
    return date;
  }

  @Get("/events/")
  async getGoogleCalendarEvents() {
    let googleClient: GoogleAPIManager = await GoogleAPIManager.getInstance();

    const events = await googleClient.getCalendarEvents();

    console.log(events);

    //TODO:: parse events into required response
    //A good idea will be to create a method and use a map function

    return "";
  }
}
