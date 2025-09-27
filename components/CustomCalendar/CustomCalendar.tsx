"use client";

import { useEffect, useRef, useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import "./CustomCalendar.css";
import { useFormikContext } from "formik";
import { RentalFormValues } from "../RentalForm/RentalForm";

export default function DateField() {
  const { setFieldValue, values } = useFormikContext<RentalFormValues>();
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const today = new Date();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  return (
    <div className="wrapper" ref={wrapperRef}>
      <div>
        <input
          type="text"
          className="inputField"
          placeholder="Booking Date"
          onClick={() => setIsOpen(true)}
          readOnly
          value={values.bookingDate || ""}
        />

        <button
          type="button"
          className="calendarToggle"
          onClick={() => setIsOpen((s) => !s)}
        ></button>
      </div>

      {isOpen && (
        <div className="calendarArea">
          <DayPicker
            disabled={{ before: today }}
            ISOWeek
            navLayout="around"
            showOutsideDays
            mode="single"
            onSelect={(date) => {
              setIsOpen(false);
              setFieldValue("bookingDate", date?.toLocaleDateString());
            }}
            className="calendar"
          />
        </div>
      )}
    </div>
  );
}
