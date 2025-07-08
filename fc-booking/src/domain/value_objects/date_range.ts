export class DateRange {
  private readonly startDate: Date;
  private readonly endDate: Date;

  constructor(startDate: Date, endDate: Date) {
    if (startDate >= endDate) {
      throw new Error("Start date must be before end date");
    }

    this.startDate = startDate;
    this.endDate = endDate;
  }

  public getStartDate(): Date {
    return this.startDate;
  }

  public getEndDate(): Date {
    return this.endDate;
  }
}
