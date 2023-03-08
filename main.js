function selectPlan(planNumber) {
    const plans = document.querySelectorAll('.plan');
  
    plans.forEach((plan, index) => {
      if (index === planNumber - 1) {
        plan.classList.add('plan--selected');
      } else {
        plan.classList.remove('plan--selected');
      }
    });
  }