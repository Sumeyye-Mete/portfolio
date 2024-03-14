export const observeViewportForMenu = (element, menuRef) => {
	if (!!element) {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						menuRef.classList.add("colored");
					} else {
						menuRef.classList.remove("colored");
					}
				});
			},
			{
				threshold: 0.2,
			}
		);

		observer.observe(element);
	}
};

export const observeViewportForAnimation = (element, timer = 0) => {
	if (!!element) {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setTimeout(() => {
						element.classList.add(`fadeInUp`);
						observer.unobserve(element);
					}, [timer]);
				}
			});
		});

		observer.observe(element);
	}
};
