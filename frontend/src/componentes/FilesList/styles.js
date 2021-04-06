import styled from "styled-components"

export const Container = styled.ul`
    margin-top:20px;

    li {
        display:flex;
        justify-content: space-between;
        align-items: center;
        color: #444;
     
    }
    li + li {
        margin-top: 15px;
    }

  
`

export const FileInfo = styled.div`
display: flex;
align-items:center;
div {
    display: flex;
    flex-direction: column;

    span{
        font-size: 12px;
        color: #999;
        margin-top: 4px;
        
        button {
            border: 0;
            background: transparent;
            color: #e57878;
            margin-left: 5px;
            cursor: pointer;
        }
    }
}
`;

export const Preview = styled.div`
    width: 36px;
    height: 36px;
    border-radius: 5px;
    background-image: url(${props => props.src});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    margin-right: 15px;

`

export const ErrorMessage = styled.div`
&:hover span{
    display:block;
}
span {

    position: absolute;
    padding: 5px;
    background: #e57878;
    color: white;
    border-radius: 3px;
    box-shadow:0px 0px 3px rgba(0,0,0,0.5);
    display:none;
    font-size:12px;
    font-weight:600;

    div {
        position:absolute;
        width:6px;
        height: 6px;
        transform: rotate(45deg);
        top: -3px;
        left: 8px;
    
        background: #e57878;
        z-index:1;
    }
}
`