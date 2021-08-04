import axios from 'axios';

const API_URL = "http://localhost:4000/";

class Searching {
  async findCourt(courtInfo) {
    const res = await axios
      .get(`${API_URL}api/courts/city/${courtInfo.selectLocation}/sport/${courtInfo.sport}/bookingStartTime/${courtInfo.startTimeISO}/bookingEndTime/${courtInfo.endTimeISO}`
    );
    
    if(!(Object.keys(res.data).length === 0)) {
      /*
        for input ex:  
          Start time : 2021-05-09T08:00:00.000Z
          End time: 2021-05-09T09:00:00.000Z
          output: 2021-05-09 --- 2021-05-09
      */
      const courtDate = {
        startTime: courtInfo.startTimeISO,
        endTime: courtInfo.endTimeISO
      }
      // console.log(courtDate);
      const fullRes = {
        courtInfo: res.data,
        courtTime: courtDate
      }

      localStorage.removeItem("courts");

      return fullRes;      
    }
  }
  async booking(bookingInfo) {
    const res = await axios
      .post(`${API_URL}payment/bookings`, bookingInfo);

    if(res.data.message) {
      return res.data.message;
    }
  }
};

export default new Searching();