<template>
  <div id="GreetingBar">
        <span id="GreetingBarCalendar">
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M3.71875 0C3.85965 0 3.99477 0.0559708 4.0944 0.1556C4.19403 0.255228 4.25 0.390354 4.25 0.53125V1.0625H12.75V0.53125C12.75 0.390354 12.806 0.255228 12.9056 0.1556C13.0052 0.0559708 13.1404 0 13.2812 0C13.4221 0 13.5573 0.0559708 13.6569 0.1556C13.7565 0.255228 13.8125 0.390354 13.8125 0.53125V1.0625H14.875C15.4386 1.0625 15.9791 1.28638 16.3776 1.6849C16.7761 2.08341 17 2.62391 17 3.1875V14.875C17 15.4386 16.7761 15.9791 16.3776 16.3776C15.9791 16.7761 15.4386 17 14.875 17H2.125C1.56141 17 1.02091 16.7761 0.622398 16.3776C0.223883 15.9791 0 15.4386 0 14.875V3.1875C0 2.62391 0.223883 2.08341 0.622398 1.6849C1.02091 1.28638 1.56141 1.0625 2.125 1.0625H3.1875V0.53125C3.1875 0.390354 3.24347 0.255228 3.3431 0.1556C3.44273 0.0559708 3.57785 0 3.71875 0V0ZM1.0625 4.25V14.875C1.0625 15.1568 1.17444 15.427 1.3737 15.6263C1.57296 15.8256 1.84321 15.9375 2.125 15.9375H14.875C15.1568 15.9375 15.427 15.8256 15.6263 15.6263C15.8256 15.427 15.9375 15.1568 15.9375 14.875V4.25H1.0625Z"
                    fill="#7B8D8B"/>
                <text x="50%" y="70%" font-size="10" dominant-baseline="middle" text-anchor="middle"
                      fill="#7B8D8B">{{ today }}</text>
            </svg>
        </span>
    <span id="GreetingBarTitle">{{ title ? title : defaultTitle }}</span>
  </div>
</template>

<script>
export default {
  name: "GreetingComponent",
  props: ["title"],
  data() {
    return {
      today: 0,
      defaultTitle: "Your forgot input a 'title'!"
    }
  },
  mounted() {
    this.today = (new Date()).getDate();// метод для подсчета сегодняшней даты
  }
}
</script>

<style scoped>
#GreetingBarTitle {
  font-family: 'Reem Kufi', sans-serif;
  font-style: normal;
  font-size: 11px;
  color: #7B8D8B;
  margin-left: 3px;
}
</style>