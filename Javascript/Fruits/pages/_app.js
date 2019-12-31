import { Provider } from 'react-redux'
import App, { Container } from 'next/app'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../redux'

export default withRedux(initStore, { debug: true })(
    class TheApp extends App {
        static async getInitialProps({ Component, ctx }) {
            console.log(Component.getInitialProps)
            return {
                ...(Component.getInitialProps
                    ? await Component.getInitialProps(ctx)
                    : {})
            }
        }

        render() {
            const { Component, pageProps, store } = this.props
            return (
                <Container>
                    <Provider store={store}>
                        <Component {...pageProps}/>
                    </Provider>
                </Container>

            )
        }
    }
)
