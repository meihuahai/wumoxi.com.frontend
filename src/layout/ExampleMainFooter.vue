<template>
    <footer
        :class="{ [`footer-${type}`]: type }"
        :data-background-color="backgroundColor"
        class="footer"
    >
        <div class="container">
            <nav>
                <ul>
                    <li>
                        <a href="https://www.creative-tim.com">
                            Creative Tim
                        </a>
                    </li>
                    <li>
                        <a href="https:///presentation.creative-tim.com">
                            About Us
                        </a>
                    </li>
                    <li>
                        <a href="https:///blog.creative-tim.com">
                            Blog
                        </a>
                    </li>
                </ul>
            </nav>
            <div class="copyright">
                &copy; {{ year }}, Designed by
                <a href="https:///www.invisionapp.com" rel="noopener" target="_blank"
                >Invision</a
                >. Coded by
                <a href="https://binarcode.com" rel="noopener" target="_blank"
                >BinarCode</a
                >
                and
                <a href="https://www.creative-tim.com" rel="noopener" target="_blank"
                >Creative Tim</a
                >.
            </div>
        </div>
    </footer>
</template>
<script>
    export default {
        props: {
            backgroundColor: String,
            type: String
        },
        data() {
            return {
                year: new Date().getFullYear()
            };
        }
    };
</script>
<style></style>
