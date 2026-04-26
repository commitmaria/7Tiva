export const countdownTime = () => {
    const duration = 30 * 60 * 1000; // 30 minutes

    // fixed session start time (safe fallback)
    let startTime = 0;

    if (typeof window !== "undefined") {
        const stored = localStorage.getItem("cart_start_time");

        if (stored) {
            startTime = Number(stored);
        } else {
            startTime = Date.now();
            localStorage.setItem("cart_start_time", String(startTime));
        }
    }

    const now = Date.now();

    const difference = duration - (now - startTime);

    if (difference > 0) {
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        return {
            days: 0,
            hours: 0,
            minutes,
            seconds,
        };
    } else {
        return {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        };
    }
};