import PropTypes from 'prop-types';

export const FirstApp = ({
    // title = 'No hay título.',
    title,
    subtitle = 'No hay subtítulo.',
    name = 'CriisDev.',
}) => {

    // console.log(props);

    return (
        <>
            <h1 data-testid="test-title">{title}</h1>
            {/* <code>{JSON.stringify(newMessage)}</code> */}
            <p>{subtitle}</p>
            <p>{subtitle}</p>
            <p>{name}</p>
        </>
    )

}


FirstApp.propTypes = {
    subtitle: PropTypes.string,
    title: PropTypes.string.isRequired,
}
