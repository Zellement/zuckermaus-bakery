export const fade = {
	initial: { opacity: 0 },
  enter: { 
    opacity: 1,
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] }
  },
	exit: {
    opacity: 0,
		transition: { duration: 0.2, ease: [0.76, 0, 0.24, 1] }
	}
}
export const hero = {
  initial: {
    y: -300,
  },
  enter: {
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  exit: {
    y: -300,
    transition: {
      duration: .3
    }
  },
}

export const hero__header = {
  initial: { y: 200, opacity: 0 },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      duration: .5,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
}

export const hero__subline = {
  initial: { y: -50, opacity: 0 },
  enter: { y: 0, opacity: 1 },
}