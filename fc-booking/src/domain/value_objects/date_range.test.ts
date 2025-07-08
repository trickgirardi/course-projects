import { DateRange } from "./date_range";

describe("DateRange Value Object", () => {
  it("should create a DateRange object", () => {
    const dateRange = new DateRange(
      new Date("2025-07-07"),
      new Date("2025-07-08")
    );
    expect(dateRange.getStartDate().toISOString()).toBe(
      new Date("2025-07-07").toISOString()
    );
    expect(dateRange.getEndDate().toISOString()).toBe(
      new Date("2025-07-08").toISOString()
    );
  });

  it("should throw an error if the start date is after the end date", () => {
    expect(() => {
      new DateRange(new Date("2025-07-08"), new Date("2025-07-07"));
    }).toThrow("Start date must be before end date");
  });

  it("should calculate the number of nights in the range", () => {
    const dateRange = new DateRange(
      new Date("2025-07-07"),
      new Date("2025-07-08")
    );
    expect(dateRange.getNumberOfNights()).toBe(1);
  });
});
