import { useTimer } from "./useTimer";

const Timer = () => {
  const { countdown } = useTimer();
  return (
    <div className="flex items-center gap-4">
      <div>
        <div className="text-xs font-medium">Days</div>
        <div className="text-3xl font-bold">
          {String(countdown.days).padStart(2, "0")}
        </div>
      </div>
      <div className="text-3xl font-bold text-red-500">:</div>
      <div>
        <div className="text-xs font-medium">Hours</div>
        <div className="text-3xl font-bold">
          {String(countdown.hours).padStart(2, "0")}
        </div>
      </div>
      <div className="text-3xl font-bold text-red-500">:</div>
      <div>
        <div className="text-xs font-medium">Minutes</div>
        <div className="text-3xl font-bold">
          {String(countdown.minutes).padStart(2, "0")}
        </div>
      </div>
      <div className="text-3xl font-bold text-red-500">:</div>
      <div>
        <div className="text-xs font-medium">Seconds</div>
        <div className="text-3xl font-bold">
          {String(countdown.seconds).padStart(2, "0")}
        </div>
      </div>
    </div>

  )
}

export default Timer